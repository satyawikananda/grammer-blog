<template>
    <vs-card class="card-content">
        <vs-row vs-w="12">
            <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="6" vs-sm="12" vs-xs="12">
                <vs-images hover="blur">
                    <g-image src="https://pbs.twimg.com/media/Ef04NN-U8AA1i9A?format=jpg" class="margin-v-sm" style="width:100%; object-fit:cover;" />
                </vs-images>
            </vs-col>
            <vs-col style="flex-direction:column" vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="6" vs-sm="12" vs-xs="12">
                <vs-divider color="#e64a19">
                    <h2 class="padding-xs">Hello world</h2>
                </vs-divider>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, laboriosam eveniet. Quisquam recusandae fugiat dolor! Itaque sed vel, deleniti, recusandae eligendi a cupiditate illo iste veniam reiciendis quis odit, doloribus dolorum ipsa!</p>
                <vs-row vs-w="12" class="margin-v-sm">
                    <vs-col type="flex" vs-lg="2" vs-sm="2" vs-xs="2">
                        <vs-avatar size="40px" src="https://avatars1.githubusercontent.com/u/33148052?s=460&u=4c6a8671f793fcb09a09c31503820b61d2e065bb&v=4" text="Satya Wikananda" />
                    </vs-col>
                    <vs-col type="flex" vs-lg="7" vs-sm="7" vs-xs="7">
                        <h4 style="color:#e64a19">Satya Wikananda</h4>
                        <p class="margin-v-sm">2 min read | {{ new Date().getFullYear() }}</p>
                    </vs-col>
                </vs-row>
            </vs-col>
        </vs-row>
        <div slot="footer">
          <vs-row vs-justify="flex-end">
            <vs-button color="#e64a19" icon="visibility" class="margin-sm">Lihat</vs-button>
          </vs-row>
        </div>
    </vs-card>
</template>