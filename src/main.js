import '../src/assets/css/tailwind.css'
import '../src/assets/scss/main.scss'

import ButtonNds from "./components/VueBased/ButtonNds/index.vue"
import Totp from "./components/VueBased/Totp/index.vue"
import TextInput from "./components/VueBased/FormNds/TextInput/index.vue"
import DateInput from "./components/VueBased/FormNds/DateInput/index.vue"
import TextArea from "./components/VueBased/FormNds/TextArea/index.vue"
import RadioInput from "./components/VueBased/FormNds/RadioInput/index.vue"
import DropdownInput from "./components/VueBased/FormNds/DropdownInput/index.vue"

export { ButtonNds, Totp, TextInput, RadioInput, DateInput, DropdownInput, TextArea }

export default {
    install: (app) => {
        app.components("ButtonNds", ButtonNds)
        app.components("Totp", Totp)
        app.components("TextInput", TextInput)
        app.components("RadioInput", RadioInput)
        app.components("DateInput", DateInput)
        app.components("DropdownInput", DropdownInput)
        app.components("TextArea", TextArea)
    }
}