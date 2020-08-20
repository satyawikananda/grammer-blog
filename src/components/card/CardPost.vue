<template>
    <vs-card actionable class="cardx padding-sm margin">
        <div slot="header">
          <h3 style="color: #E64A19">Hello world!</h3>
        </div>
        <div slot="media">
          <g-image src="https://pbs.twimg.com/media/Ef04NN-U8AA1i9A?format=jpg" />
        </div>
        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, tempora.</p>
        </div>
        <div slot="footer">
            <vs-row vs-w="12" class="margin-v-sm">
                <vs-col type="flex" vs-lg="3" vs-sm="2" vs-xs="2">
                    <vs-avatar size="40px" src="https://avatars1.githubusercontent.com/u/33148052?s=460&u=4c6a8671f793fcb09a09c31503820b61d2e065bb&v=4" text="Satya Wikananda" />
                </vs-col>
                <vs-col type="flex" vs-lg="7" vs-sm="7" vs-xs="7" class="margin-h-sm">
                    <h5 style="color:#e64a19">Satya Wikananda</h5>
                    <p class="margin-v-sm" style="font-size: .8rem">2 min read | {{ new Date().getFullYear() }}</p>
                </vs-col>
            </vs-row>
        </div>
    </vs-card>
</template>