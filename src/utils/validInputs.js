export const lastnameIsValid = (v) => {
    const required = !!v;
    const format = v.charAt(0) === v.charAt(0).toUpperCase();
    const maxLength = v.length <= 50;
    if (!required) { return { valid: false, error: "Le nom est requis" }; }
    if (!format) { return { valid: false, error: "Le nom doit commencer par une majuscule" }; }
    if (!maxLength) { return { valid: false, error: "Le nom doit faire maximum 50 caractères" }; }
    return { valid: true };
}

export const firstnameIsValid = (v) => {
    const required = !!v;
    const format = v.charAt(0) === v.charAt(0).toUpperCase();
    const maxLength = v.length <= 50;
    if (!required) { return { valid: false, error: "Le prénom est requis" }; }
    if (!format) { return { valid: false, error: "Le prénom doit commencer par une majuscule" }; }
    if (!maxLength) { return { valid: false, error: "Le prénom doit faire maximum 50 caractères" }; }
    return { valid: true };
}

export const emailIsValid = (v) => {
    const required = !!v;
    const format = /.+@.+\..+/.test(v);
    const maxLength = v.length <= 100;
    if (!required) { return { valid: false, error: "L'e-mail est requis" }; }
    if (!format) { return { valid: false, error: "Le format de l'e-mail doit être valide" }; }
    if (!maxLength) { return { valid: false, error: "L'e-mail doit faire maximum 100 caractères" }; }
    return { valid: true };
};

export const passwordIsValid = (v) => {
    const required = !!v;
    const format = /[A-Z]/.test(v) && /[a-z]/.test(v) && /[0-9]/.test(v) && /[^A-Za-z0-9]/.test(v);
    const minLength = v.length > 7;
    const maxLength = v.length <= 60;
    if (!required) return { valid: false, error: "Le mot de passe est requis" };
    if (!format) return { valid: false, error: "Le mot de passe doit contenir : une majuscule, une minuscule, un chiffre, un caractère spécial" };
    if (!minLength) return { valid: false, error: "Le mot de passe doit faire minimum 8 caractères" };
    if (!maxLength) return { valid: false, error: "Le mot de passe doit faire maximum 60 caractères" };
    return { valid: true };
};

export const confirmPasswordIsValid = (v, w) => {
    const required = !!v;
    const compare = v === w;
    if (!required) return { valid: false, error: "Veuillez confirmer le mot de passe" };
    if (!compare) return { valid: false, error: "Les mot de passe doivent être identique" };
    return { valid: true };
}

export const newPasswordIsValid = (v, w) => {
    const required = !!v;
    const compare = v === w;
    if (!required) return { valid: false, error: "Le nouveau mot de passe est requis" };
    if (compare) return { valid: false, error: "Les mot de passe doivent être différents" };
    return { valid: true };
}

export const photoIsValid = (v) => {
    const required = !!v;
    let format = false;
    if (!required) return { valid: false, error: "La photo est requise" }; else {
        format = v.type === 'image/jpeg' || v.type === 'image/png';
    }
    if (!format) return { valid: false, error: "La photo doit être au format png ou jpg" };
    return { valid: true };
}

export const titleIsValid = (v) => {
    const required = !!v;
    const format = v.length <= 60;
    if (!required) return { valid: false, error: "Le titre est requis" };
    if (!format) return { valid: false, error: "Le titre doit faire maximum 60 caractères" }
    return { valid: true };
}

export const contentIsValid = (v) => {
    const required = !!v;
    const format = v.length <= 255;
    if (!required) return { valid: false, error: "Le contenu est requis" };
    if (!format) return { valid: false, error: "Le contenu doit faire maximum 255 caractères" }
    return { valid: true };
}

export const stockIsValid = (v, w) => {
    const required = v > "0";
    const compare = v <= w;
    if (!required) return { valid: false, error: "Veuillez ajouter une quantitée valide de produit" };
    if (!compare) return { valid: false, error: "La quantité de produit ne doit pas excéder le stock" };
    return { valid: true };
}