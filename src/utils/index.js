export const reformatedDates = (key) => {
    const date = new Date(key);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
}

export const ticketStatusName = (key) => {
    if (key == "1") {
        return "Ouvert";
    } else if (key == "2") {
        return "Clos";
    }
}

export const orderStatusName = (key) => {
    if (key == "1") {
        return "Validée";
    } else if (key == "2") {
        return "En cours";
    } else if (key == "3") {
        return "Disponible";
    } else if (key == "4") {
        return "Récupérée";
    } else if (key == "5") {
        return "Annulée";
    }
}

export const fetchSearchElement = (search, items) => {
    if (search) {
        return items.filter((item) => {
            return item.name
                .toLowerCase()
                .includes(search.toLowerCase());
        });
    }
    return items;
}