import { alertController } from "@ionic/vue";

const renderAlert = async (key) => {
    const alert = await alertController.create({
        header: "Avertissement",
        message:
            key,
        buttons: [
            {
                text: "Ok",
                role: "confirm",
                id: "confirm-button",
            },
        ],
    });
    return alert.present();
};

export default renderAlert;