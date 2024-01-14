<template>
    <DZ_Block>
        <div class="flex flex-col gap-2 text-teal-950 list">
            <div>
                It is possible to use 
                <span class="text-gradient-700 font-medium">1 additional bed <i class="fa-solid fa-bed"></i></span>
                in all appartments, and the 
                <span class="text-gradient-700 font-medium">washing machine <i class="fa-solid fa-calendar-week"></i></span> 
                to the owner.
            </div>
            <div>
                We are situated in a quiet zone, with 
                <span class="text-gradient-700 font-medium">parking place <i class="fa-solid fa-square-parking"></i> in the yard</span>
                and 
                <span class="text-gradient-700 font-medium">
                    garden <i class="fa-solid fa-clover"></i> 
                    with shower <i class="fa-solid fa-shower"></i>
                </span>
                and 
                <span class="text-gradient-700 font-medium">grill <i class="fa-solid fa-fire-burner"></i></span>.
            </div>
            <ol class="text-sm flex flex-col gap-1.5 mt-4">
                <li class="text-gradient from-red-700 to-rose-700 font-medium">
                    <i class="fa-solid fa-warning mr-1"></i> 
                    The price don't includes registration, air-contition and fees for pets
                </li>
                <li class="text-gradient from-red-700 to-rose-700 font-medium">
                    <i class="fa-solid fa-receipt mr-2"></i> Daily TAX is included in price
                </li>
                <li>
                    <i class="fa-solid fa-wind mr-1"></i> 
                    Price for <u>air-condition</u> is 
                    <span class="text-gradient-700"><b>5</b> € / <b>1</b> day</span>
                </li>
                <li>
                    <i class="fa-solid fa-paw mr-1"></i> 
                    Price for <u>pets</u> is 
                    <span class="text-gradient-700"><b>5</b> € to <b>10</b> € / <b>1</b> day</span>
                </li>
                <li>
                    <i class="fa-solid fa-user-plus mr-0.5"></i> 
                    Price for <u>extra <b>1</b> person</u> is 
                    <span class="text-gradient-700"><b>11</b> € / <b>1</b> day</span>
                </li>
                <li>
                    <i class="fa-solid fa-registered mr-1"></i> 
                    Price for <u>registration <b>once</b></u> per person 
                    <span class="text-gradient-700"><b>3.50</b> € (also children)</span>
                </li>
            </ol>
        </div>
    </DZ_Block>
</template>
<script>
export default {
    name: "DZ_Info"
}
</script>