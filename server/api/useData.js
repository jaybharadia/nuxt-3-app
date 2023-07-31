export default eventHandler((event) => {
    console.log("event context", event.context.session);

    // Return the count
});
