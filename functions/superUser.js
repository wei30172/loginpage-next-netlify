export.handler = async() => {
  console.log('function ran')

  const data = { name: 'claire', age: 30 }

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}