exports.handler = async (event, context) => {
  const guide = [
    { title: 'Aliquam sagittis non ex eu porttitor', authur: 'Vestibulum nunc'},
    { title: 'Phasellus lacinia ex urna, nec porttitor', authur: 'Pellentesque porttitor'},
    { title: 'Donec suscipit facilisis lectus, a egestas', authur: 'Aenean lobortis'},
  ]

  if (context.clientContext.user) {
    return {
      statusCode: 200,
      body: JSON.stringify(guide)
    }
  }

  return {
    statusCode: 401,
    body: JSON.stringify({ mssg: 'Hey, you must be logged in to see this'})
  }
}