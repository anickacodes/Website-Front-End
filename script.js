let current_customer_id;
let order_id;
let script_to_head = (attributes_object) => {
return new Promise( (resolve, reject) => {
const script = document. createElement ('script');
for (const name of Object.keys (attributes_object)) {
script.setAttribute (name, attributes_object [name]);
}
});

document.head.appendChild(script);
script.addEventListener('load', resolve); script. addEventListener ('error', reject);
}
let reset_purchase_button = () => {
document .querySelector ("#card-form").querySelector ("input [type='submit']").removeAttribute ("disabled");
document. querySelector ("#card-form").querySelector ("input [type='submit ']").value = "Purchase"
}
const is_user_logged_in = () => {
return new Promise( (resolve) => {
customer_id = localStorage.getItem("logged_in_user_id") || "";
resolve ();
})
}

const get_client_token = () => {
    return new Promise(async (resolve, reject)=> {
        try {
            const response = await fetch("http://localhost:3000/get _client_token", {
            method: "POST", headers: { "Content-Type": "application/json"}, body: JSON.stringify({ "customer_id": current_customer_id }), });
            const client_token = await response.text() ;
            resolve(client_token)
            } catch(error) { reject (error)
        }
    })
}

let handle_close = (event) => {event.target.closest(".ms-alert").remove()
}

let handle_click = (event) => {
    if (event.target.classList.contains('ms-close')) {
        handle_close(event)
    }
}

document.addEventListener("click" , handle_click)

const paypal_sdk_url = "https://www.paypal.com/sdk/js"