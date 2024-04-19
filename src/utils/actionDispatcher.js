export const actionDispatcher = (dispatcher, type, payload) => {
  dispatcher({ type, payload })
}
