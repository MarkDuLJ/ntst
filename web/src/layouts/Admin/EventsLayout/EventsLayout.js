import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const EventsLayout = ({ children }) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.adminEvents()} className="rw-link">
            Events
          </Link>
        </h1>
        <Link to={routes.adminNewEvent()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Event
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default EventsLayout
