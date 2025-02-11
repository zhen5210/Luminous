// @generated by protobuf-ts 2.9.4 with parameter generate_dependencies,long_type_number,output_javascript
// @generated from protobuf file "apple.parsec.siri.v2alpha.SiriPegasusRequest.proto" (syntax proto3)
// tslint:disable
// @generated by protobuf-ts 2.9.4 with parameter generate_dependencies,long_type_number,output_javascript
// @generated from protobuf file "apple.parsec.siri.v2alpha.SiriPegasusRequest.proto" (syntax proto3)
// tslint:disable
import { MessageType } from "@protobuf-ts/runtime";
import { SiriPegasusContext } from "./apple.parsec.siri.v2alpha.SiriPegasusContext";
import { PegasusQueryContext } from "./apple.parsec.search.PegasusQueryContext";
import { PegasusSearchQuery } from "./apple.parsec.siri.v2alpha.PegasusSearchQuery";
// @generated message type with reflection information, may provide speed optimized methods
class SiriPegasusRequest$Type extends MessageType {
    constructor() {
        super("SiriPegasusRequest", [
            { no: 1, name: "queries", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => PegasusSearchQuery },
            { no: 2, name: "queryContext", kind: "message", T: () => PegasusQueryContext },
            { no: 3, name: "userDataShareOptIn", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "featureFlag", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "siriPegasusContext", kind: "message", T: () => SiriPegasusContext },
            { no: 8, name: "isDataOnlyRequest", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message SiriPegasusRequest
 */
export const SiriPegasusRequest = new SiriPegasusRequest$Type();
