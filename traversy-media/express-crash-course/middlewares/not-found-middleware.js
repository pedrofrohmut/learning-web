const notFoundMiddleware = (req, res, next) => {
    const error = new Error("Route not found")
    error.status = 404
    return next(error)
}

export default notFoundMiddleware
