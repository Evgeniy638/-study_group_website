export const maxLengthCreator = maxLength => value => {
    if (value && value.length <= maxLength) return undefined

    return `Максимальная длина ${maxLength}`
}

export const minLengthCreator = minLength => value => {
    if (value && value.length >= minLength) return undefined

    return `Минимальная длина ${minLength}`
}

export const validatorTimeInput = value => {
    const regExp = /^\d\d:\d\d$/

    if (value && regExp.test(value)) return undefined

    return "Время должно иметь вид чч:мм (например 10:06)"
}

export const validatorImage = value => {

    return undefined

    //image/jpeg
    //image/png
}