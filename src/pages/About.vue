<template>
  <Layout>
    <vs-row vs-w="12" class="margin-v-xl">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="12" vs-sm="12" vs-xs="12">
        <vs-card class="cardx padding" fixedHeight>
          <center><img src="https://avatars1.githubusercontent.com/u/33148052?v=4" alt="satya-pic" class="avatar-rounded"/></center>
          <vs-divider color="#E64A19"><h2>Tentang yang punya blog</h2></vs-divider>
          <p style="font-size: .9rem" class="text-center">Hallo 👋. Nama ku <b style="color: #E64A19">I Gusti Ngurah Satya Wikananda</b>, biasa dipanggil <b style="color: #E64A19">Satya</b>, aku sekarang berumur {{ getAge("2001/04/23") }}. Tujuanku menulis adalah hanya ingin membagikan kepada pembaca apa yang sudah aku pelajari dan apa yang sudah aku dapatkan. Untuk tema blog aku ini, mungkin bisa seputar pengembangan software seperti website dan teknologi lainnya juga, dan aku juga bakal share tentang diluar topik yang sudah aku sebutkan tadi. Oh ya, kalau kalian ada sesuatu yang bisa kalian bagikan, kalian bisa bikin <i>pull request</i> di repo blog ini di github atau jika kalian suka sama blog ini, jangan lupa star repo blog ini di github ku ya, karena itu sangat membantu aku agar tambah semangat lagi buat berkarya 😁. Semoga bermanfaat, sekian dan terimakasih 😎</p>
          <vs-row vs-w="12" class="margin-v">
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="12" vs-sm="12" vs-xs="12">
              <vs-button href="https://github.com/satyawikananda/grammer-blog" size="medium" color="#FF4E50" gradient-color-secondary="#F9D423" type="gradient" icon="share">Ayo kontribusi</vs-button>
            </vs-col>
          </vs-row>
        </vs-card>
      </vs-col>
    </vs-row>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Tentang saya',
  },
  methods: {
    getAge(dateString) {
      const today = new Date()
      const birthDate = new Date(dateString)
      let age = today.getFullYear() - birthDate.getFullYear()
      const month = today.getMonth() - birthDate.getMonth()

      if(month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--
      }

      return age
    }
  }
}
</script>
