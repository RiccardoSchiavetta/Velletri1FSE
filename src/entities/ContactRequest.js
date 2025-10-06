export const ContactRequest = {
  name: "ContactRequest",
  type: "object",
  properties: {
    name: {
      type: "string",
      description: "Nome della famiglia o persona interessata"
    },
    email: {
      type: "string",
      format: "email",
      description: "Email di contatto"
    },
    phone: {
      type: "string",
      description: "Numero di telefono"
    },
    child_age: {
      type: "number",
      description: "Età del bambino/ragazzo interessato"
    },
    branch_interest: {
      type: "string",
      enum: [
        "lupetti",
        "esploratori",
        "rover",
        "generale"
      ],
      description: "Branca di interesse"
    },
    message: {
      type: "string",
      description: "Messaggio o domande specifiche"
    },
    status: {
      type: "string",
      enum: [
        "nuovo",
        "contattato",
        "completato"
      ],
      default: "nuovo",
      description: "Status della richiesta"
    }
  },
  required: [
    "name",
    "email",
    "phone",
    "message"
  ],
  rls: {
    read: {
      $or: [
        {
          created_by: "{{user.email}}"
        },
        {
          user_condition: {
            role: "admin"
          }
        }
      ]
    },
    write: {
      user_condition: {
        role: "admin"
      }
    }
  }
};

export default ContactRequest;