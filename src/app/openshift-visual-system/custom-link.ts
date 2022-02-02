import { ChangeDetectorRef, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import * as go from 'gojs';

// This custom-routing Link class tries to separate parallel links from each other.
// This assumes that ports are lined up in a row/column on a side of the node.
export class CustomLink extends go.Link {

    constructor() {
        super();
    }

    public findSidePortIndexAndCount(node: go.Node, port: { data: any; _side: any; }) {
        let nodedata = node.data;
        let len = 0;
        if (nodedata !== null) {
            let portdata = port.data;
            let side = port._side;
            let arr = nodedata[side + "Array"];
            len = arr.length;
            for (let i = 0; i < len; i++) {
                if (arr[i] === portdata) return [i, len];
            }
        }
        return [-1, len];
    }

    public override computeEndSegmentLength(node: go.Node, port: any, spot: go.Spot, from: any): number {
        const esl = super.computeEndSegmentLength(node, port, spot, from);
        //const tempLink = super.elements.filter(x => x instanceof go.Shape).first() as go.Shape;
        //console.log(port.data['portColor']);
        //tempLink.stroke = port.data['portColor'];
        const other = this.getOtherPort(port);
        if (port !== null && other !== null) {
            const thispt = port.getDocumentPoint(this.computeSpot(from));
            const otherpt = other.getDocumentPoint(this.computeSpot(!from));
            if (Math.abs(thispt.x - otherpt.x) > 20 || Math.abs(thispt.y - otherpt.y) > 20) {
                const info = this.findSidePortIndexAndCount(node, port);
                const idx = info[0];
                const count = info[1];
                if (port._side == "top" || port._side == "bottom") {
                    if (otherpt.x < thispt.x) {
                        return esl + 4 + idx * 8;
                    } else {
                        return esl + (count - idx - 1) * 8;
                    }
                } else {  // left or right
                    if (otherpt.y < thispt.y) {
                        return esl + 4 + idx * 8;
                    } else {
                        return esl + (count - idx - 1) * 8;
                    }
                }
            }
        }
        return esl;
    }

    public override hasCurviness() {
        if (isNaN(this.curviness)) return true;
        return super.hasCurviness();
    }

    public override computeCurviness() {
        if (isNaN(this.curviness)) {
            let fromnode = this.fromNode ?? new go.Node();
            let fromport = this.fromPort;
            let fromspot = this.computeSpot(true);
            let frompt = fromport?.getDocumentPoint(fromspot) ?? new go.Point();
            let tonode = this.toNode ?? new go.Node();
            let toport = this.toPort;
            let tospot = this.computeSpot(false);
            let topt = toport?.getDocumentPoint(tospot) ?? new go.Point();
            if (Math.abs(frompt.x - topt.x) > 20 || Math.abs(frompt.y - topt.y) > 20) {
                if ((fromspot.equals(go.Spot.Left) || fromspot.equals(go.Spot.Right)) &&
                    (tospot.equals(go.Spot.Left) || tospot.equals(go.Spot.Right))) {
                    const fromseglen = this.computeEndSegmentLength(fromnode, fromport, fromspot, true);
                    const toseglen = this.computeEndSegmentLength(tonode, toport, tospot, false);
                    const c = (fromseglen - toseglen) / 2;
                    if (frompt.x + fromseglen >= topt.x - toseglen) {
                        if (frompt.y < topt.y) return c;
                        if (frompt.y > topt.y) return -c;
                    }
                } else if ((fromspot.equals(go.Spot.Top) || fromspot.equals(go.Spot.Bottom)) &&
                    (tospot.equals(go.Spot.Top) || tospot.equals(go.Spot.Bottom))) {
                    const fromseglen = this.computeEndSegmentLength(fromnode, fromport, fromspot, true);
                    const toseglen = this.computeEndSegmentLength(tonode, toport, tospot, false);
                    const c = (fromseglen - toseglen) / 2;
                    if (frompt.x + fromseglen >= topt.x - toseglen) {
                        if (frompt.y < topt.y) return c;
                        if (frompt.y > topt.y) return -c;
                    }
                }
            }
        }
        return super.computeCurviness();
    }
}