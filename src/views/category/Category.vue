<template>
  <div class="cnt">
    <ul>
      <button>按钮</button>
      <li>分类1</li>
      <li>分类2</li>
      <li>分类3</li>
      <li>分类4</li>
      <li>分类5</li>
      <li>分类6</li>
      <li>分类7</li>
      <li>分类8</li>
      <li>分类9</li>
      <li>分类10</li>
      <li>分类11</li>
      <li>分类12</li>
      <li>分类13</li>
      <li>分类14</li>
      <li>分类15</li>
      <li>分类16</li>
      <li>分类17</li>
      <li>分类18</li>
      <li>分类19</li>
      <li>分类20</li>
      <li>分类21</li>
      <li>分类22</li>
      <li>分类23</li>
      <li>分类24</li>
      <li>分类25</li>
      <li>分类26</li>
      <li>分类27</li>
      <li>分类28</li>
      <li>分类29</li>
      <li>分类30</li>
      <li>分类31</li>
      <li>分类32</li>
      <li>分类33</li>
      <li>分类34</li>
      <li>分类35</li>
      <li>分类36</li>
      <li>分类37</li>
      <li>分类38</li>
      <li>分类39</li>
      <li>分类40</li>
      <li>分类41</li>
      <li>分类42</li>
      <li>分类43</li>
      <li>分类44</li>
      <li>分类45</li>
      <li>分类46</li>
      <li>分类47</li>
      <li>分类48</li>
      <li>分类49</li>
      <li>分类50</li>
      <li>分类51</li>
      <li>分类52</li>
      <li>分类53</li>
      <li>分类54</li>
      <li>分类55</li>
      <li>分类56</li>
      <li>分类57</li>
      <li>分类58</li>
      <li>分类59</li>
      <li>分类60</li>
      <li>分类61</li>
      <li>分类62</li>
      <li>分类63</li>
      <li>分类64</li>
      <li>分类65</li>
      <li>分类66</li>
      <li>分类67</li>
      <li>分类68</li>
      <li>分类69</li>
      <li>分类70</li>
      <li>分类71</li>
      <li>分类72</li>
      <li>分类73</li>
      <li>分类74</li>
      <li>分类75</li>
      <li>分类76</li>
      <li>分类77</li>
      <li>分类78</li>
      <li>分类79</li>
      <li>分类80</li>
      <li>分类81</li>
      <li>分类82</li>
      <li>分类83</li>
      <li>分类84</li>
      <li>分类85</li>
      <li>分类86</li>
      <li>分类87</li>
      <li>分类88</li>
      <li>分类89</li>
      <li>分类90</li>
      <li>分类91</li>
      <li>分类92</li>
      <li>分类93</li>
      <li>分类94</li>
      <li>分类95</li>
      <li>分类96</li>
      <li>分类97</li>
      <li>分类98</li>
      <li>分类99</li>
      <li>分类100</li>
    </ul>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll';
export default {
  mounted() {
      //默认情况下BstterScroll是不可以实时监听滚动位置的
      // probe侦测
      //0，1都是不侦测
      //2：侦测手指滑动的地方，惯性不会侦测
      //3：连惯性也会zhence
    let bscroll = new BetterScroll('.cnt', {
      probeType: 3,
      click: true,
      pullUpLoad: true
    })

    //监听滚动位置
    bscroll.on('scroll',(position) => {
      // console.log(position);
    })
    
    //监听下拉到底部时回调一个函数
    bscroll.on('pullingUp', () => {
      console.log('下拉加载更多');
      //发送网络请求，请求多页数据
      //数据请求完成，展示多页数据
      setTimeout(() => {
        bscroll.finishPullUp()
      },2000)
    })
  }
}
</script>

<style>
  .cnt {
    height: 350px;
    background-color: pink;
  }
</style>