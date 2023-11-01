import './loading-page.styles.scss'

const LoadingPage = ({ isLoading }) => {
        return (
             isLoading ? 
                <div class="loading" align="center">
                <div class="main">
                    <div class="small1">
                    <div class="small ball smallball1"></div>
                    <div class="small ball smallball2"></div>
                    <div class="small ball smallball3"></div>
                    <div class="small ball smallball4"></div>
                    </div>

                    <div class="small2">
                    <div class="small ball smallball5"></div>
                    <div class="small ball smallball6"></div>
                    <div class="small ball smallball7"></div>
                    <div class="small ball smallball8"></div>
                    </div>

                    <div class="bigcon">
                    <div class="big ball"></div>
                    </div>
                </div>
            </div>  
            : 
            <span></span>  
        )
    }

    export default LoadingPage