
class Product{
	render(){
		let htmlCatalog='';
		CATALOG.forEach(({id,img,title,text,price})=>{
			htmlCatalog +=`
			<div class="box">
				<img src="${img}"/>
				<h3>${title}</h3>
				<p>${text}</p>
				<small>${price}</small>
				<a href="#" class="button">Купить</a>
			</div>
			`
			console.log(id,img,title,text,price);
		});
		console.log(product);
		const html=`${htmlCatalog}`;
		product.innerHTML=html;
	}
}
const productPage=new Product();
productPage.render();




