/*********************** Custom JS for Boost AI Search & Discovery  ************************/
console.log('check')
const customize = {
  updateBtns: (componentRegistry) => {
    componentRegistry.useComponentPlugin('ProductItem', {
      name: 'Show addition Data',
      enabled: true,
      apply: () => ({
        afterRender(element){
          let data = element.getParams().props.product;
          let productItem = document.querySelector('[data-product-id="'+ data.id +'"]');
          
          const skuHtml = '<div class="boost-sd__product-sku" style="width: 100%;">PART#: ' + data.skus[0] + '</div>';
          if (!productItem.querySelector('.boost-sd__product-sku') && data.skus.length > 0) {
            productItem.querySelector('.boost-sd__product-title').insertAdjacentHTML('afterend', skuHtml);
          }
        }
      }),
    });
  }
}

window.__BoostCustomization__ = (window.__BoostCustomization__ ?? []).concat([customize.updateBtns]);