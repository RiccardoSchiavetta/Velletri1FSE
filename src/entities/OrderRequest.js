export const OrderRequest = {
  name: "OrderRequest",
  type: "object",
  properties: {
    name: {
      type: "string",
      description: "Nome della persona che ordina"
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
    order_details: {
      type: "string",
      description: "Elenco degli articoli da ordinare (nome, taglia, quantità)"
    },
    status: {
      type: "string",
      enum: [
        "nuovo",
        "elaborato",
        "pronto",
        "consegnato"
      ],
      default: "nuovo",
      description: "Status dell'ordine"
    }
  },
  required: [
    "name",
    "email",
    "order_details"
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

export default OrderRequest;