export const standard = defineScenario({
  orderdetail: {
    one: {
      quantity: 8397364,
      products: {
        create: {
          name: 'String',
          description: 'String',
          price: 4511396.452392384,
          tag: 'String',
          cat: { create: { category_name: 'String3928681', notes: 'String' } },
        },
      },

      order: {
        create: {
          customers: {
            create: {
              first_name: 'String',
              last_name: 'String',
              Phone: 'String4195188',
              Email: 'String848794',
              PostalCode: 'String',
            },
          },
        },
      },
    },

    two: {
      quantity: 2944674,
      products: {
        create: {
          name: 'String',
          description: 'String',
          price: 9527450.510280458,
          tag: 'String',
          cat: { create: { category_name: 'String7374423', notes: 'String' } },
        },
      },

      order: {
        create: {
          customers: {
            create: {
              first_name: 'String',
              last_name: 'String',
              Phone: 'String1612954',
              Email: 'String4271611',
              PostalCode: 'String',
            },
          },
        },
      },
    },
  },
})
