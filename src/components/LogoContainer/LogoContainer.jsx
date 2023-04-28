// Styles
import classes from './LogoContainer.module.css';

const LogoContainer = () => {
    return (
        <div className={ classes[ 'logo-container' ] }>
            <div className={ classes[ 'logo-inner-container' ] }>
                <img className={ classes.logo } src="../../ti_logo.png" alt="" />
                <div className={ classes[ 'solar-panel-container' ] }>
                    <div className={ classes[ 'solar-panel' ] } />
                    <div className={ classes[ 'solar-panel' ] } />
                    <div className={ classes[ 'solar-panel' ] } />
                    <div className={ classes[ 'solar-panel' ] } />
                </div>
            </div>
            <div className={ classes[ 'model-container' ] }>
                <h1 className={ classes[ 'calc-model' ] }>
					TI-108
                </h1>
            </div>
        </div>
    );
};

export default LogoContainer;
