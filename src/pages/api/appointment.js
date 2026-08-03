export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const {
    form = "Appointment",
    doctor,
    name,
    phone,
    date,
    time,
    treatment,
    service,
    message,
    email,
  } = req.body || {};

  const isContactForm = form === "Contact";

  if (!name || !phone) {
    return res.status(400).json({
      success: false,
      message: "Name and Phone number are required fields.",
    });
  }

  if (isContactForm && (!treatment || !message)) {
    return res.status(400).json({
      success: false,
      message: "Treatment and message are required fields.",
    });
  }

  const googleSheetUrl =
    "https://script.google.com/macros/s/AKfycbz4bDzFm3w_NZDxoRH_BuBmFdpYxJ6duMAEuVa7VH_dqDmoOXVIlLCabkOcmJOQ9OQh/exec";

  const payload = {
    timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    form,
    doctor: isContactForm ? "" : doctor || "Not Selected",
    name,
    phone,
    email: email || "",
    treatment: treatment || service || "",
    service: service || treatment || "",
    message: message || "",
    date: isContactForm ? "" : date || "Not Specified",
    time: isContactForm ? "" : time || "Not Specified",
  };

  try {
    if (googleSheetUrl) {
      const queryParams = new URLSearchParams(payload).toString();
      const targetUrl = `${googleSheetUrl}?${queryParams}`;

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
      message: isContactForm
        ? "Contact request submitted successfully!"
        : "Appointment request submitted successfully!",
      data: payload,
    });
  } catch (error) {
    console.error("Form Submission Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to submit form. Please try again later.",
    });
  }
}
