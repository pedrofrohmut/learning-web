// Phone number string: /^(\d{3})(\d{3})(\d{4})$/ => (\1) \2-\3
export const phoneFmt = (phone) =>
    phone.replace(/^(\d{3})(\d{3})(\d{4})$/, "($1) $2 - $3")
