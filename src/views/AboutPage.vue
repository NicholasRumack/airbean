<template>
	<div class="AboutPage">
		<img src="@/assets/pink-header.png" class="pinkHeader">
		<div class="nav">
			<NavBar/>
		</div>
		<div class="description">
			<h1>Vårt Kaffe</h1>
			<h4>Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio, grounds dripper, crema, strong whipped, variety extra iced id lungo half and half mazagran. Pumpkin spice.</h4>
			<p>Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich aftertaste, con panna milk black, arabica white rich beans single shot extra affogato. So affogato macchiato sit extraction
				instant grinder seasonal organic, turkish single shot, single origin, and robusta strong to go so dripper. Viennese froth, grounds caramelization skinny aromatic cup kopi-luwak, fair trade flavour, 
				frappuccino medium, café au lait flavour cultivar ut bar instant kopi-luwak. </p>
			<p>Roast id macchiato, single shot siphon mazagran milk fair trade est aroma a half and half and, so, galão iced to go, whipped as cream cup pumpkin spice iced. At extra, rich grinder, brewed to go, 
				steamed half and half at, that, percolator macchiato trifecta and body as arabica dripper. In galão black java milk sit trifecta, robusta, acerbic café au lait instant shop latte. Seasonal bar shop 
				filter aroma id, crema, affogato viennese cultivar aftertaste, seasonal, percolator cream black, galão flavour, milk aromatic turkish skinny crema.</p>    
		</div>
			<img src="@/assets/ceo.png" class="ceoImg">
			<h3>Eva Cortado</h3>
			<p class="ceoTitle">VD &amp; Grundare</p>
			<img src="@/assets/pink-footer.png" class="pinkFooter">
	</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'


export default {
    name: 'AboutPage',
    components: {
      NavBar
  }
}
</script>
<style scoped>
.AboutPage {
  background-color: #F3E4E1;
  width: 375px;
  min-height: 1061px;
}
.description{
  padding: 30px;
  text-align: center;
}
.ceoImg{
  width: 74px;
  margin-left: 9em;
}
.pinkHeader{
  width: 375px;
  height: 113px;
  margin-bottom: -3em;
}
.pinkFooter{
  width: 375px;
  height: 113px;
  margin-bottom: -10px;
}
.nav{
  position: fixed;
  margin-top: -2.5em;
  margin-left: 1.2em;
}
p{
  padding-top: 10px;
  font-size: 12px;
  line-height: 1.75;
}
h4{
  font-size: 14px;
  line-height: 1.75;
}
.ceoTitle{
  font-size: 12px;
  margin-top: -30px;
  margin-left: 12em;
}
h3{
  margin-left: 7em;
  margin-top: 5px;
}
</style>