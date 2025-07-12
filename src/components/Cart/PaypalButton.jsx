import {PayPalButtons, PayPalScriptProvider} from "@paypal/react-paypal-js";

const PaypalButton = ({amount,onSuccess,onError}) => {
  return <PayPalScriptProvider options={{"client-id":
    "AaQ-MfPnvcM6RRztxC-JsSnCuf7OB4V1if87bHPMAbzlsSz220UQe-7TepibL_zBAFsdLDflyYr3oTAh"}}>

    <PayPalButtons style={{layout:"vertical"}}
    createOrder={(data, actions)=>{
        return actions.order.create({
            purchase_units: [{amount:{value:amount}}]
        })
    }}
    onApprove={(data,actions)=>{
        return actions.order.capture().then(onSuccess)
    }}
    onError={onError}
    />    
    </PayPalScriptProvider>
}

export default PaypalButton
