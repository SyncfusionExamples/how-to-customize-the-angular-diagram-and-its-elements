import { Component, ViewEncapsulation } from '@angular/core';
import { ConnectorModel, FlowShapeModel, NodeModel, PageSettingsModel, PointPortModel, SnapConstraints, SnapSettingsModel,
  ConnectorBridging, Diagram, DiagramConstraints } from '@syncfusion/ej2-angular-diagrams';
Diagram.Inject(ConnectorBridging);
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'myangularproject';
  
  public terminator: FlowShapeModel = { type: 'Flow', shape: 'Terminator' };
  public data: FlowShapeModel = { type: 'Flow', shape: 'Data' };
  public process: FlowShapeModel = { type: 'Flow', shape: 'Process' };
  public decision: FlowShapeModel = { type: 'Flow', shape: 'Decision' };

  public connection = DiagramConstraints.Default | DiagramConstraints.Bridging;

  public displacement: object = { x:10, y: 10}
  public ports: PointPortModel[] = [
    { id:'port1', offset: {x:0.5, y:1} },
    { id:'port2', offset: {x:1, y:0.5} }
  ]

  public snapOptions: SnapSettingsModel = {
    constraints: SnapConstraints.None
  } 

  public pageOptions: PageSettingsModel = {
    height: 842,
    width: 595,
    showPageBreaks: true,
    orientation: 'Portrait',
    multiplePage: true,
    background: { color: '#CEF6F5' },
    margin: {
      left: 20,
      top: 20,
      bottom: 20,
      right: 20,
    }
  }

  public nodeDefaults(obj: NodeModel){
    obj.style = {
      fill: 'LightGreen',
      strokeColor: 'Orange',
      strokeWidth: 3,
      strokeDashArray: '7,7',
      gradient:{
        type: 'Linear',
        x1: 0,
        y1: 0,
        x2: 50,
        y2: 50,
        stops:[
          { color: 'White', offset:0 },
          { color: '#6BA5D7', offset:100 }
        ]
      }
    }
  }

  public connectorDefaults(connector: ConnectorModel){
    connector.style = { strokeColor: 'Blue'}
    connector.sourceDecorator = { shape:'Diamond', style:{ fill: 'Yellow', strokeColor: 'Blue', strokeWidth: 2 }}
    connector.targetDecorator = { shape:'IndentedArrow'}
    connector.hitPadding = 40;
    connector.sourcePadding = 5;
    connector.targetPadding = 5;
  }
}
