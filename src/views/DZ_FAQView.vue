<script setup>
const faq = [
    { q: "Is Wi-Fi free?", a: "Yes, complimentary Wi-Fi is available for all guests."},
    { q: "Can I bring my pet with me?", a: "Yes, we are pet-friendly. Please notify us in advance if you plan to bring a pet, extra fee will apply."},
    { q: "Do you have air conditioner?", a: "Yes, every appartment has air conditioner."},
    { q: "Do you have washing machine?", a: "Yes, if you ask the owner you can use it and pay for its use."},
    { q: "Why are there no ingredients such as salt or sugar?", a: "We used to leave salt or sugar 8-9 years ago but we stopped doing it since we had a complaint from one of our guests."},
    { q: "Is parking available on-site?", a: "Yes, we provide free on-site parking for our guests."},
    { q: "Are there any grocery stores nearby?", a: "Yes, there are grocery stores conveniently located in the vicinity."},
    { q: "Is there a minimum stay requirement?", a: "It depends on the season and availability; check our website or contact us for details."},
    { q: "Is breakfast included in the room rate?", a: "No, breakfast is not included, but there are breakfast options nearby."},
    { q: "Can I request a late check-out?", a: "Late check-out requests are subject to availability and may incur an additional fee."},
    { q: "Are there any nearby attractions or landmarks?", a: "Yes, we can provide information on local attractions and help plan your itinerary."},
    { q: "Is smoking allowed in the rooms?", a: "No, all our rooms are non-smoking; there are designated smoking areas."},
    { q: "Do you provide a crib or baby cot for infants?", a: "Yes, we offer cribs or baby cots upon request for our younger guests."},
    { q: "Are there any bike rental services nearby?", a: "Yes, there are bike rental services in close proximity for those who want to explore on two wheels."},
    { q: "Can I extend my stay beyond the original reservation?", a: "Extension of stay is subject to room availability; please contact the host to check for availability and rates."},
    { q: "Are linens and towels provided?", a: "Yes, fresh linens and towels are provided in the apartment."},
    { q: "What kitchen amenities are available in the apartment?", a: "Each apartment is equipped with a plenty of kitchen amenities for your convenience."},
    { q: "Can I host visitors in my apartment?", a: "Visitors are allowed, but we request that you inform us in advance for security purposes."},
    { q: "How do I access the apartment keys?", a: "Key access details will be provided upon check-in. In case of any issues, please contact our front desk."},
    { q: "", a: ""},
    { q: "", a: ""},
    { q: "", a: ""},
    { q: "", a: ""},
    { q: "", a: ""},
    { q: "", a: ""},
    { q: "", a: ""},
]
</script>
<template>
    <div class="flex flex-col justify-start gap-8 pt-4 sm:pt-16">       
        <div class="flex-col-center | transition-500 p-DZ gap-8">

            <DZ_Block class="sm:mb-[960px]">
                <div class="relative flex-center w-full">
                    <div class="text-teal-950 text-sm flex flex-col gap-1 sm:gap-3 font-light grow">
                        <div class="text-4xl text-gradient-900 drop-shadow-md">
                            Frequently asked question
                        </div>
                        <DZ_hr class="my-4"/>  
                        <div v-for="f in faq" class="flex flex-col gap-2">
                            <div v-if="f.q" class="text-lg font-bold text-gradient-800 w-fit">{{f.q}}</div>
                            <div v-if="f.q" class="ml-4 sm:ml-8 font-normal">{{f.a}}</div>
                        </div>
                    </div>
                </div>
            </DZ_Block>
            
        </div>

        <DZ_Footer/>

    </div>
</template>

<script>
export default {
    name: "DZ_FAQView",
};
</script>