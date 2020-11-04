<template>
  <div class="d-params-info" v-if="Object.keys(ParamsInfo).length !== 0">
    <div class="params-data">
      <table class="p-table">
        <tr v-for="(item, index) in ParamsInfo.tables[0]" :key="index">
          <td v-for="(items, index) in item" :key="index">{{ items }}</td>
        </tr>
      </table>
    </div>
    <!-- <table>
      <tr v-for="(tr, index) in ParamsInfo.set" :key="index">
        <td v-for="(td, index) in tr" :key="index">{{ td }}</td>
      </tr>
    </table> -->
    <table class="p-tables">
      <tr class="p-tables-tr" v-for="(tr, index) in ParamsInfo.set" :key="index">
        <td class="p-key">{{ tr.key }}</td>
        <td class="p-value">{{ tr.value }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "DetailParamsInfo",
  props: {
    ParamsInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .p-table {
    width: 100%;
    text-align: center;
  }
  .p-table tr{
    border-bottom: 1px solid rgba(100, 100, 1000, .1);
    height: 40px;
  }
  .p-tables tr {
    border-bottom: 1px solid rgba(100, 100, 1000, .1);
    height: 40px;
  }
  .p-key {
    display: inline-block;
    width: 32px;
    line-height: 40px;
  }
  .p-value {
    padding-left: 60px;
    color: var(--color-high-text);
  }
</style>