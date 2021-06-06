

    <!-- svelte-ignore a11y-invalid-attribute -->

 <div id="menu-settings" class="menu menu-box-bottom menu-box-detached rounded-m" data-menu-height="308">
    <div class="menu-title"><h1>Settings</h1><p class="color-highlight">Flexible and Easy to Use</p><a href="#" class="close-menu"><i class="fa fa-times"></i></a></div>
    <div class="divider divider-margins mb-n2"></div>
    <div class="content">
        <div class="list-group list-custom-small">
        
            <a href="#" data-toggle-theme data-trigger-switch="switch-dark-mode" class="pb-2 ml-n1">
                <i class="fa font-12 fa-moon rounded-s bg-highlight color-white mr-3"></i>
                <span>Dark Mode</span>
                <div class="custom-control scale-switch ios-switch">
                    <input data-toggle-theme-switch type="checkbox" class="ios-input" id="switch-dark-mode">
                    <label class="custom-control-label" for="switch-dark-mode"></label>
                </div>
                <i class="fa fa-angle-right"></i>
            </a>    
        </div>
        <div class="list-group list-custom-large">
            <a data-menu="menu-highlights" href="#">
                <i class="fa font-14 fa-tint bg-green1-dark rounded-s"></i>
                <span>Page Highlight</span>
                <strong>16 Colors Highlights Included</strong>
                <span class="badge bg-highlight color-white">HOT</span>
                <i class="fa fa-angle-right"></i>
            </a>        
            <a data-menu="menu-backgrounds" href="#" class="border-0">
                <i class="fa font-14 fa-cog bg-blue2-dark rounded-s"></i>
                <span>Background Color</span>
                <strong>10 Page Gradients Included</strong>
                <span class="badge bg-highlight color-white">NEW</span>
                <i class="fa fa-angle-right"></i>
            </a>        
        </div>
    </div>
</div>