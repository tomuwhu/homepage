<template>
  <div class="home">
    <div class="wrapper">
      <div class="avatar">
        <img :src="$withBase(data.avatar)" alt="">
      </div>
      <div class="card">
        <div class="bio">
          <div class="head">
            <span>
              {{data.head}}
            </span>
          </div>
          <div class="info">
            <span>
              {{data.info}}
            </span>
          </div>
          <div class="loc">
            <span class=nw v-html="data.loc1" />
            <span class=nw v-html="data.loc2" />
          </div>
          <div class="description">
            <Content/>
          </div>
        </div>
        <div class="socials">
          <div v-for="item in data.socials">
            <a :href="item.link" target="_blank">
              <img :src="'icons/'+item.title+'.svg'" :alt="item.title"
              :title="item.title" />
            </a>
          </div>
        </div>
        <div class="actions">
          <div v-for="item in data.actions">
            <a :href="item.link" class="button page"
                :target="item.link.startsWith('/')?'':'_blank'">
              &#x2606; {{item.text}} &#x2606;
            </a>
          </div>
          <div v-for="item in data.links">
            <a :href="item.link" class="button link"
                :target="item.link.startsWith('/')?'':'_blank'">
              {{item.text}} &rArr;
            </a>
          </div>
        </div>
      </div>
      <div class="footer" v-if="data.footer">
        {{ data.footer }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hp',
  computed: {
    data() {
      return this.$page.frontmatter;
    }
  }
};
</script>

<style lang="stylus">
@import './styles/config.styl'

body
  .home
    max-width 100%
    background-color $homeBgColor
    min-height calc(100vh - 40px)
    display flex
    padding 2.4rem 2rem 0
  @media (max-width: $MQMobileNarrow)
    .home
      padding-left 0
      padding-right 0
      padding 1rem 0.5rem
.wrapper
  width 100%
  display: flex
  flex-direction column
  // justify-content: center
  align-items center
  .avatar 
    position relative
    z-index 1
    img
      display block
      width 100%
      height auto
      max-width 150px
      border-radius 500rem
      box-shadow: 1px 1px 6px black;
      border: solid 4px white;
  .card
    max-width: 600px
    width 100%
    position relative
    top -75px
    padding-top 75px
    margin-left auto 
    margin-right auto 
    background #fff
    box-shadow 0 4px 8px 0 rgba(0,0,0,0.2);
    border-radius 0.3rem
    text-align center 
    .bio
      padding 1em
      .head
        font-weight 700
        font-size 1.3em
      .info
        padding 0.5rem
        font-size 1em
        color rgba(0,0,0,.4)
      .description
        text-align justify
        p
          padding 0.8em 0.5em 0
          line-height normal
          -webkit-margin-before 0em
          -webkit-margin-after 0em
          a
            font-weight normal
    .loc
      padding 1em 1.5em
      border-top 1px solid rgba(34,36,38,.1)
      span
        white-space: nowrap
    .socials
      border-top 1px solid rgba(34,36,38,.1)
      display flex
      flex-direction: row
      // align-items: center
      justify-content: center
      flex-wrap wrap 
      img 
        width 32px
        margin 1em
        cursor pointer
    .actions
      border-top 1px solid rgba(34,36,38,.1)
      display flex
      flex-direction: row
      justify-content: center
      flex-wrap wrap
      .button
        text-shadow 0px 0px 3px black
        border none
        border-radius 0.3em
        margin-top 20px
        margin-bottom 20px
        margin-left 5px
        margin-right 5px
        font-size 14px
        font-family inherit
        font-weight 400
        text-align center
        text-decoration none
        display inline-block
        -webkit-transition-duration 700ms /* Safari */
        transition-duration 700ms
        cursor pointer
        box-shadow 1px 1px 5px black
      .page
        padding 6px
        background-color rgb(20,140,140)
        color white
        &:hover
          background-color rgb(0,60,100)
      .link
        padding 5px
        background-color rgb(20,100,80)
        color white
        &:hover
          background-color rgb(0,60,100)
  .footer
      padding 1rem
      border-top 1px solid lighten(#bdc3c7, 50%)
      font-weight 200
      font-size 1rem
      text-align center
      color lighten($footColor, 25%)
      margin-top auto

</style>
