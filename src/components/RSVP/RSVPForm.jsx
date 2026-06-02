import { useState } from "react";

import {
  collection,
  addDoc,
  serverTimestamp
} from "firebase/firestore";

import { db } from "../../firebase/firebase";

export default function RSVPForm({
  onSuccess
}) {
  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      guestName: "",
      phone: "",
      guests: 1,
      attending: "Yes",
      message: ""
    });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      setLoading(true);

      await addDoc(
        collection(db, "rsvps"),
        {
          ...formData,
          createdAt:
            serverTimestamp()
        }
      );

      onSuccess();

      setFormData({
        guestName: "",
        phone: "",
        guests: 1,
        attending: "Yes",
        message: ""
      });

    } catch (error) {
      console.error(error);
      alert(
        "Something went wrong."
      );
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rsvp-form"
    >
      <input
        type="text"
        name="guestName"
        placeholder="Guest Name"
        value={formData.guestName}
        onChange={handleChange}
        required
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        min="1"
        name="guests"
        value={formData.guests}
        onChange={handleChange}
      />

      <select
        name="attending"
        value={formData.attending}
        onChange={handleChange}
      >
        <option value="Yes">
          Attending
        </option>

        <option value="No">
          Unable To Attend
        </option>
      </select>

      <textarea
        rows="5"
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
      />

      <button
        disabled={loading}
        className="submit-btn"
      >
        {loading
          ? "Submitting..."
          : "Submit RSVP"}
      </button>
    </form>
  );
}