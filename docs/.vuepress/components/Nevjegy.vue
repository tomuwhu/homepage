<template>
    <div>
        <table>
            <tr class="row">
                <td>
                    <img class="ico" src="/~tnemeth/icons/black-envelope.svg" alt="e-mail" title="e-mail" />
                </td>
                <td>tnemeth@inf.u-szeged.hu</td>
            </tr>
            <tr class="row">
                <td>
                    <img class="ico" src="/~tnemeth/icons/old-typical-phone.svg" alt="telefon" title="telefon" />
                </td>
                <td>+36 (62) 343-435</td>
            </tr>
            <tr class="row">
                <td>
                    <img class="ico" src="/~tnemeth/icons/homepage.svg" alt="homepge" title="homepage" />
                </td>
                <td>http://www.inf.szte.hu/~tnemeth/</td>
            </tr>
            <tr class="row">
                <td>
                    <img class="ico" src="/~tnemeth/icons/cake.svg" alt="születési dátum" title="születési dátum" />
                </td>
                <td>1973.04.26.</td>
            </tr>
            <tr class="row">
                <td>
                    <img class="ico" 
                        :src="`/~tnemeth/icons/${ icolist[0].icon }.svg`" 
                        :alt="icolist[0].name"
                        :title="icolist[0].name" />
                </td>
                <td>tomuwhu</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data: () => ({
        icolist: [
            { icon: 'steam', name: 'Steam' }, 
            { icon: 'battlenet', name:'Battle.net' },
            { icon: 'gh', name: 'Hangout' }
        ].sort( () => Math.random()-0.5 )
    })
}
</script>

<style scoped>
td {
    padding: 3px;
    padding-right: 15px;
    border: none;
    vertical-align: middle;
}
img.ico {
    width:25px;
}
</style>