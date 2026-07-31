export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const { doctor, name, phone, date, time } = req.body || {};

  // Basic Server-side Validation
  if (!name || !phone) {
    return res.status(400).json({
      success: false,
      message: "Name and Phone number are required fields.",
    });
  }

  const googleSheetUrl =
    "https://script.google.com/macros/s/AKfycbyLmzVvaiJrHBh8MeY7e9-qvj0MtQSc2779ujlVTPU3wN7MOU-tb0cR_k1Pv7BS1qjg/exec";

  // Prepare submission data
  const payload = {
    timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    doctor: doctor || "Not Selected",
    name,
    phone,
    date: date || "Not Specified",
    time: time || "Not Specified",
  };

  try {
    if (googleSheetUrl) {
      const queryParams = new URLSearchParams(payload).toString();
      const targetUrl = `${googleSheetUrl}?${queryParams}`;

      // Send data to Google Apps Script Web App (supporting both e.parameter and e.postData)
      const response = await fetch(targetUrl, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
        redirect: "follow",
      });

      const responseText = await response.text();
      console.log("Google Apps Script Response:", responseText);
    }

    return res.status(200).json({
      success: true,
      message: "Appointment request submitted successfully!",
      data: payload,
    });
  } catch (error) {
    console.error("Form Submission Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to submit appointment. Please try again later.",
    });
  }
}
