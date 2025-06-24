import { useState } from "react"

export default function ContactForm(){
    return (
    <div id="Contact">
        <form name="contact" method="POST" netlify>
            <input type="hidden" name="form-name" value="contact" />
          <p>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="name" required />
          </p>
          <p>
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" name="email" required />
          </p>
          <p>
            <label htmlFor="message">Message: </label>
            <textarea id="message" name="message" required></textarea>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
    </div>
    )
}