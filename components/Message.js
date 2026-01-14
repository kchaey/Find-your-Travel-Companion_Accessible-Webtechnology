// components/Message.js

const htmlTemplate = /*html*/`
  <div class="message-bubble">
    <strong>{{ message.sender }}</strong>
    <p>{{ message.text }}</p>
  </div>
`;

export default {
  template: htmlTemplate,
  props: {
      message: {
          type: Object,
          required: true
      }
  }
};