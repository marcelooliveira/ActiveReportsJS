import React from 'react';
import '@grapecity/activereports/styles/ar-js-viewer.css';
import { } from '@grapecity/activereports-localization';
//import { Viewer } from '@grapecity/activereports-react';
import { Viewer } from '@grapecity/activereports';
import { PdfExport, HtmlExport, XlsxExport, Core } from '@grapecity/activereports';

class App extends React.Component {
    _viewer = Viewer;

    render() {
        //const parameters = [{ Name: 'Data', Value: ['orders.json'] }];

        //return (<div className="demo-app" style={{ height: '1000px' }} >
        //    <Viewer
        //        report={{ Uri: "drill-down.rdlx-json", ReportParams: parameters }}
        //        sidebarVisible={true}
        //        toolbarVisible={false} />
        //</div>);

        var v = new Viewer.Viewer('#arjsv-host'); 
        return v;
    }
}
export default App;