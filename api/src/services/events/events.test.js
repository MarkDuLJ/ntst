import { events, event, createEvent, updateEvent, deleteEvent } from './events'

describe('events', () => {
  scenario('returns all events', async (scenario) => {
    const result = await events()

    expect(result.length).toEqual(Object.keys(scenario.event).length)
  })

  scenario('returns a single event', async (scenario) => {
    const result = await event({ id: scenario.event.one.id })

    expect(result).toEqual(scenario.event.one)
  })

  scenario('creates a event', async () => {
    const result = await createEvent({
      input: {
        title: 'String3126725',
        description: 'String',
        imgUrl: 'String',
      },
    })

    expect(result.title).toEqual('String3126725')
    expect(result.description).toEqual('String')
    expect(result.imgUrl).toEqual('String')
  })

  scenario('updates a event', async (scenario) => {
    const original = await event({ id: scenario.event.one.id })
    const result = await updateEvent({
      id: original.id,
      input: { title: 'String15099912' },
    })

    expect(result.title).toEqual('String15099912')
  })

  scenario('deletes a event', async (scenario) => {
    const original = await deleteEvent({ id: scenario.event.one.id })
    const result = await event({ id: original.id })

    expect(result).toEqual(null)
  })
})
