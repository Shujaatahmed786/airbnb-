import React from 'react';
import HomeLogo from '../src/assets/Home-logo.png';

function Container({cardItem}){
    console.log("Card", cardItem)
    return(
        
        <div className='flex flex-col space-y-4 cursor-pointer hover:shadow'>
            <img src={HomeLogo} alt="home" className='h-72 w-3/4 rounded-2xl'/>
            <div className='flex flex-col'>
                <div className='flex gap-8'>
            <span className='font-bold'>Cumbria, UK</span>
            <span className='flex'>5.6<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>
</span>
            </div>
            <span>Viewed 1,946 times last week</span>
            <span>Dec 18-30</span>
            <div className='justify-between'>
            <span className='font-bold'>${cardItem?.charges}</span>
            <span>   night</span>
            </div>
            </div>
        </div>

    )
}

export default Container