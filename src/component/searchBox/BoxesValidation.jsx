export const ValidateAndAccept = (data) => {
    if (!data.departure || !data.destination || !data.start_time) {
        return false
    }
    return true
}