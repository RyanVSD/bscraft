ServerEvents.recipes(event => {
  // Remove the conflicting 2x2 recipe for one of the blocks
  event.remove({ output: 'quark:thatch', input: 'minecraft:wheat' })

  // Re-add it with a new pattern (e.g., 2x2 wheat + 1 string, or 4 wheat in a diamond)
  event.shaped(Item.of('quark:thatch', 4), [
    ' W ',
    'WSW',
    ' W '
  ], {
    W: 'minecraft:wheat',
    S: 'minecraft:stick'
  })
})

