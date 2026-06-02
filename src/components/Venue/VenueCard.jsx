import {
  CalendarDays,
  Clock3,
  MapPin
} from "lucide-react";

export default function VenueCard({
  venue
}) {
  return (
    <div className="venue-card">

      <h3 className="venue-title">
        {venue.venueName}
      </h3>

      <div className="venue-info">

        <div className="venue-item">
          <CalendarDays size={18} />

          <span>
            {venue.date}
          </span>
        </div>

        <div className="venue-item">
          <Clock3 size={18} />

          <span>
            {venue.time}
          </span>
        </div>

        <div className="venue-item">
          <MapPin size={18} />

          <span>
            {venue.address}
          </span>
        </div>

      </div>

      <a
        href={venue.mapLink}
        target="_blank"
        rel="noreferrer"
        className="navigate-btn"
      >
        Navigate Now
      </a>

    </div>
  );
}