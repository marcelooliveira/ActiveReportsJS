import React from 'react';
import '@grapecity/activereports/styles/ar-js-viewer.css';
import { } from '@grapecity/activereports-localization';
import { Viewer } from '@grapecity/activereports-react';
import { PdfExport, HtmlExport, XlsxExport, Core } from '@grapecity/activereports';

class App extends React.Component {
    _viewer = Viewer;

    render() {
        return (<div className="demo-app" style={{ height: '1000px' }} >
            <Viewer
                report={{ Uri: "InvoiceList.rdlx-json" }}
                sidebarVisible={true}
                toolbarVisible={false}
                language='ja' />
        </div>);
    }
}
export default App;