import { logger } from 'src/lib/logger'

import { stripe } from 'src/lib/stripe'

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

export const handler = async (event, context) => {
  logger.info('Invoked stripehook function')

  if (event.httpMethod !== 'POST') {
    return { statusCode: 404 }
  }

  const sig = event.headers['stripe-signature']

  let stripeEvent

  try {
    stripeEvent = stripe.webhooks.constructEvent(event.body, sig, webhookSecret)
  } catch (error) {
    return {
      statusCode: 400,
      body: `Event Error: ${error.message}`,
    }
  }

  console.log(`WEB_HOOK is here, ${stripeEvent.id}`)
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify({
      data: `stripehook function: ${stripeEvent.id}`,
    }),
  }
}
