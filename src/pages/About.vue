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

      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="12" vs-sm="12" vs-xs="12" class="margin-v-xl">
        <vs-card class="cardx padding" fixedHeight>
          <!-- Replace soon -->
          <!-- <center>
            <div v-html="data[3].src" style="width: 20vh;height: auto;"></div>
          </center> -->
          <vs-divider color="#E64A19"><h2>Teknologi atau pendukung yang digunakan</h2></vs-divider>
          <vs-row vs-w="12">
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="3" vs-sm="6" vs-xs="6" v-for="(item,i) in data" :key="i" class="margin-v">
              <vs-card class="cardx padding margin card-content" fixedHeight>
                <center>
                  <div v-html="item.src" style="width: 100%;height:auto"></div>
                </center>
                <div>
                  <h2 class="text-center margin-v" style="color: #E64A19">{{ item.title }}</h2>
                  <p class="text-center" style="color: #E64A19">{{ item.desc }}</p>
                </div>
              </vs-card>
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
  data(){
    return{
      data: [
        {
          id: 1,
          title: "Javascript",
          src: `
            <svg width="80%"height="auto"viewBox="0 0 256 256"version="1.1"xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink"preserveAspectRatio="xMidYMid"><g><path d="M0,0 L256,0 L256,256 L0,256 L0,0 Z"fill="#F7DF1E"></path><path d="M67.311746,213.932292 L86.902654,202.076241 C90.6821079,208.777346 94.1202286,214.447137 102.367086,214.447137 C110.272203,214.447137 115.256076,211.354819 115.256076,199.326883 L115.256076,117.528787 L139.313575,117.528787 L139.313575,199.666997 C139.313575,224.58433 124.707759,235.925943 103.3984,235.925943 C84.1532952,235.925943 72.9819429,225.958603 67.3113397,213.93026"fill="#000000"></path><path d="M152.380952,211.354413 L171.969422,200.0128 C177.125994,208.433981 183.827911,214.619835 195.684368,214.619835 C205.652521,214.619835 212.009041,209.635962 212.009041,202.762159 C212.009041,194.513676 205.479416,191.592025 194.481168,186.78207 L188.468419,184.202565 C171.111213,176.81473 159.597308,167.53534 159.597308,147.944838 C159.597308,129.901308 173.344508,116.153295 194.825752,116.153295 C210.119924,116.153295 221.117765,121.48094 229.021663,135.400432 L210.29059,147.428775 C206.166146,140.040127 201.699556,137.119289 194.826159,137.119289 C187.78047,137.119289 183.312254,141.587098 183.312254,147.428775 C183.312254,154.646349 187.78047,157.568406 198.089956,162.036622 L204.103924,164.614095 C224.553448,173.378641 236.067352,182.313448 236.067352,202.418387 C236.067352,224.071924 219.055137,235.927975 196.200432,235.927975 C173.860978,235.927975 159.425829,225.274311 152.381359,211.354413"fill="#000000"></path></g></svg>
          `,
          desc: "Bahasa pemrograman"
        },
        {
          id: 2,
          title: "Vue Js 2",
          src: `
            <svg width="90%"height="auto"viewBox="0 0 256 221"version="1.1"xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink"preserveAspectRatio="xMidYMid"><g><path d="M204.8,0 L256,0 L128,220.8 L0,0 L50.56,0 L97.92,0 L128,51.2 L157.44,0 L204.8,0 Z"fill="#41B883"></path><path d="M0,0 L128,220.8 L256,0 L204.8,0 L128,132.48 L50.56,0 L0,0 Z"fill="#41B883"></path><path d="M50.56,0 L128,133.12 L204.8,0 L157.44,0 L128,51.2 L97.92,0 L50.56,0 Z"fill="#35495E"></path></g></svg>
          `,
          desc: "Framework Javascript"
        },
        {
          id: 3,
          title: "Vuesax 3",
          src: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680.69 725.78" width="80%" height="auto"><title>Recurso 47</title><g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1"><polygon points="680.42 59.35 555.03 59.35 340.34 391.82 125.67 59.35 0.27 59.35 340.35 586 680.42 59.35"/><polygon points="340.34 644.59 52.42 198.71 0 198.71 340.33 725.78 680.69 198.71 628.26 198.71 340.34 644.59"/><polygon points="518.83 10.13 340.33 281.52 161.87 10.13 293.21 43.27 293.21 0 387.48 0 387.48 43.27 518.83 10.13"/></g></g></svg>
          `,
          desc: "UI Component Vue Js"
        },
        {
          id: 4,
          title: "Gridsome",
          src: `
            <svg width="80%"height="auto"viewBox="0 0 256 256"version="1.1"xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink"preserveAspectRatio="xMidYMid"><defs><linearGradient x1="20.9379706%"y1="135.775348%"x2="67.3305702%"y2="141.765059%"id="linearGradient-1"><stop stop-color="#1A7D75"offset="0%"></stop><stop stop-color="#1A8864"offset="100%"></stop></linearGradient><linearGradient x1="5.87891947%"y1="11.1173081%"x2="-17.3060707%"y2="72.2714937%"id="linearGradient-2"><stop stop-color="#168A81"offset="1.29262%"></stop><stop stop-color="#31A97F"offset="100%"></stop></linearGradient><linearGradient x1="-144.300883%"y1="53.4330921%"x2="-70.3570682%"y2="117.633897%"id="linearGradient-3"><stop stop-color="#27A59B"offset="0%"></stop><stop stop-color="#64D8A2"offset="100%"></stop></linearGradient><linearGradient x1="-143.418979%"y1="60.4705186%"x2="-4.6930745%"y2="180.917352%"id="linearGradient-4"><stop stop-color="#27A59B"offset="0%"></stop><stop stop-color="#64D8A2"offset="100%"></stop></linearGradient><linearGradient x1="208.845261%"y1="-141.921386%"x2="86.1110263%"y2="-183.711114%"id="linearGradient-5"><stop stop-color="#27A59B"offset="0%"></stop><stop stop-color="#64D8A2"offset="100%"></stop></linearGradient></defs><g><path d="M231.385192,105.753666 C243.693045,105.162254 254.589241,114.710531 255.651902,127.030923 C260.255723,186.627723 206.695298,253.278629 129.833649,255.413356 C117.515347,255.756082 107.253404,246.019723 106.911723,233.667984 C106.571086,221.315201 116.279233,211.025046 128.597535,210.682319 C179.588555,209.266482 211.891576,165.222988 210.167494,129.174009 C209.577127,116.831674 219.076294,106.346123 231.385192,105.753666 Z"fill="url(#linearGradient-1)"></path><path d="M22.5511546,104.48516 C34.8738452,104.48516 44.8633832,114.502597 44.8633832,126.85956 C44.8633832,178.434678 86.3330844,211.812899 127.753257,210.790988 C140.072604,210.486923 150.304245,220.254629 150.607266,232.607413 C150.911331,244.961241 141.169747,255.222139 128.851445,255.526205 C64.0788477,257.123854 0.017481991,205.267658 0.017481991,126.85956 C0.017481991,114.502597 10.228464,104.48516 22.5511546,104.48516 Z"fill="url(#linearGradient-2)"></path><path d="M175.646155,128.59409 C175.646155,115.943511 185.965568,105.687837 198.694515,105.687837 L232.283804,105.687837 C245.013796,105.687837 255.651902,115.943511 255.651902,128.59409 C255.651902,141.245715 245.013796,151.501388 232.283804,151.501388 L198.694515,151.501388 C185.965568,151.501388 175.646155,141.245715 175.646155,128.59409 Z"fill="url(#linearGradient-3)"fill-rule="nonzero"></path><path d="M105.167788,128.627527 C105.167788,115.958139 115.421372,105.687837 128.055233,105.687837 C140.690139,105.687837 150.943723,115.958139 150.943723,128.627527 C150.943723,141.296915 140.690139,151.568262 128.055233,151.568262 C115.421372,151.568262 105.167788,141.296915 105.167788,128.627527 Z"fill="url(#linearGradient-4)"fill-rule="nonzero"></path><path d="M150.30947,21.4461786 C150.82147,33.7924839 141.254384,44.2166994 128.942351,44.7294309 C75.7930942,46.9428382 43.3459824,88.7162913 44.9253457,128.380931 C45.4169701,140.727446 36.0337865,151.136719 23.7209179,151.629911 C11.4080493,152.123103 0.580146899,142.157911 0.0885098702,129.811397 C-2.4852274,65.1737998 51.3350632,1.27453845 127.090792,0.0196327146 C139.402825,-0.493101849 149.798515,9.09988375 150.30947,21.4461786 Z"fill="url(#linearGradient-5)"></path></g></svg>
          `,
          desc: "Static Site Generator (SSG) Vue Js"
        },
        {
          id: 5,
          title: "Vercel",
          src: `
            <svg role="img" aria-label="Vercel Inc." width="100%" height="auto" viewBox="0 0 283 64" fill="var(--geist-foreground)"><path d="M37 0l37 64H0L37 0zM159.6 34c0-10.3-7.6-17.5-18.5-17.5s-18.5 7.2-18.5 17.5c0 10.1 8.2 17.5 19.5 17.5 6.2 0 11.8-2.3 15.4-6.5l-6.8-3.9c-2.1 2.1-5.2 3.4-8.6 3.4-5 0-9.3-2.7-10.8-6.8l-.3-.7h28.3c.2-1 .3-2 .3-3zm-28.7-3l.2-.6c1.3-4.3 5.1-6.9 9.9-6.9 4.9 0 8.6 2.6 9.9 6.9l.2.6h-20.2zM267.3 34c0-10.3-7.6-17.5-18.5-17.5s-18.5 7.2-18.5 17.5c0 10.1 8.2 17.5 19.5 17.5 6.2 0 11.8-2.3 15.4-6.5l-6.8-3.9c-2.1 2.1-5.2 3.4-8.6 3.4-5 0-9.3-2.7-10.8-6.8l-.3-.7H267c.2-1 .3-2 .3-3zm-28.7-3l.2-.6c1.3-4.3 5.1-6.9 9.9-6.9 4.9 0 8.6 2.6 9.9 6.9l.2.6h-20.2zM219.3 28.3l6.8-3.9c-3.2-5-8.9-7.8-15.8-7.8-10.9 0-18.5 7.2-18.5 17.5s7.6 17.5 18.5 17.5c6.9 0 12.6-2.8 15.8-7.8l-6.8-3.9c-1.8 3-5 4.7-9 4.7-6.3 0-10.5-4.2-10.5-10.5s4.2-10.5 10.5-10.5c3.9 0 7.2 1.7 9 4.7zM282.3 5.6h-8v45h8v-45zM128.5 5.6h-9.2L101.7 36 84.1 5.6h-9.3L101.7 52l26.8-46.4zM185.1 25.8c.9 0 1.8.1 2.7.3v-8.5c-6.8.2-13.2 4-13.2 8.7v-8.7h-8v33h8V36.3c0-6.2 4.3-10.5 10.5-10.5z"></path></svg>
          `,
          desc: "Sebagai tempat hosting"
        }
      ]
    }
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
