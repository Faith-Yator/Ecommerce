import React from 'react'
import'./ordercancellation.css'

function OrderCancellation() {
  return (
    <div className='cancel'>
       <h1>HOW TO CANCEL YOUR ORDER</h1><br />
       <h2>FREQUENTLY ASKED QUESTIONS</h2> 
<h5>How can I cancel an item / order?</h5>
<p>
Please note you may cancel one item at a time. To cancel an item on your order, <br/>it must not yet be shipped (which means that it’s already on its way to your selected delivery address).<br/>
1. Log into your Digistic-Electonics account.<br/>
2. Select ‘Account’ in the upper right hand menu<br/>
3. Select ‘Orders’<br/>
4. Find the item you would like to cancel and click ‘Cancel item’<br/>
5. Select the cancellation reason from the drop-down menu, and click submit<br/>

If your order is prepaid, you will receive your refund as per standard timelines
The product I wish to cancel has already been shipped, what do I do?<br/>
Although online cancellation is not possible once a product has been packed and shipped to your selected delivery address,<br/> you may opt to reject it. This means that once our delivery agent contacts you for delivery,<br/> you can decline, or if you selected a pick up station, you may omit to pick up the package<br/>
I get an error message when I try to submit my online cancellation request. Why?
In certain cases, the option to cancel an individual item from your order may not be available.<br/> This is usually the case if you have benefited from an offer based on the total number of items ordered <br/>(example: free delivery above ascertain order value).<br/> You may need to cancel the entire order, please contact us for more support<br/>
        </p>
      
    </div>
  )
}

export default OrderCancellation
