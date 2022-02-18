<template>
  <div class="flex md:flex-row flex-col justify-center md:justify-around items-center md:items-start pt-[10px] md:pt-[150px] mb-6 md:mb-0">

    <div class="flex flex-col rounded-2xl transition-all hover:shadow-[5px_5px_2px_rgba(0,0,0,0.9)] shadow-[9px_9px_2px_rgba(0,0,0,0.9)] md:shadow-[15px_15px_2px_rgba(0,0,0,0.9)] bg-[#2EC4B6] w-[88vw] md:w-[400px] h-max p-5">
      <input type="text" v-model="form.namawaifu" class="bg-[#EFEA5A] font-ubuntu py-2 mb-3 px-3 rounded-lg" placeholder="Waifumu">
      <input type="text" v-model="form.aksi1" class="bg-[#EFEA5A] font-ubuntu py-2 mb-3 px-3 rounded-lg" placeholder="Aksi 1">
      <input type="text" v-model="form.bagian_tubuh" class="bg-[#EFEA5A] font-ubuntu py-2 mb-3 px-3 rounded-lg" placeholder="Bagian Tubuh">
      <input type="text" v-model="form.bagian_tubuh2" class="bg-[#EFEA5A] font-ubuntu py-2 mb-3 px-3 rounded-lg" placeholder="Bagian Tubuh 2">
      <input type="text" v-model="form.cosplay" class="bg-[#EFEA5A] font-ubuntu py-2 mb-3 px-3 rounded-lg" placeholder="Cosplay">
    </div>

    <div class="mt-6 md:mt-0 w-[88vw] md:w-[340px] lg:w-[500px] xl:w-[700px] h-[400px] bg-[#2EC4B6] rounded-2xl transition-all hover:shadow-[5px_5px_2px_rgba(0,0,0,0.9)] shadow-[9px_9px_2px_rgba(0,0,0,0.9)] md:shadow-[15px_15px_2px_rgba(0,0,0,0.9)] overflow-y-scroll scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-custom scrollbar-track-custom-light ">
      <p class="font-ubuntu p-5 text-lg">Uwooooggghhhhhhhhhh Seeeeegggssssss {{ form.namawaifu || 'waifumu'}} Wangyyyy Bangeeetttsssss , Gua rela {{ form.aksi1 || 'Aksi 1' }} demi ngejilatin {{ form.bagian_tubuh || 'Bagian Tubuh' }} nya, Ngeliatin {{ form.bagian_tubuh2 || 'Bagian Tubuh 2' }} nya aja bikin gwe sange , uwogggggghh {{ form.namawaifu || 'Waifumuuuuu' }} , Gw Ingin lo cosplay jadi {{ form.cosplay || 'Maid' }} terus gw segsss brutalll sampe lumpuhhh</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        'namawaifu': '',
        'aksi1': '',
        'bagian_tubuh': '',
        'bagian_tubuh2': '',
        'cosplay': ''
      }
    }
  },
}
</script>