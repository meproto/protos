/**
 * @license Apache-2.0
 * Copyright © 2025 ReallyMe LLC
 */
// Entry point for @meproto/protos
//

export {
  // Messages
  DIDDocument,
  VerificationMethod,
  Service,
  Attestation,
  DataIntegrityProof,
  DomainVerification,
  DNSBinding,
  WellKnownBinding,
  UpdatePolicy,

  // Message descriptors
  DIDDocumentSchema,
  VerificationMethodSchema,
  ServiceSchema,
  AttestationSchema,
  DataIntegrityProofSchema,
  DomainVerificationSchema,
  DNSBindingSchema,
  WellKnownBindingSchema,
  UpdatePolicySchema,
} from "./did/did_v1/did_pb.js";

// Enums (typed)
export {
  Algorithm,
  UserVerificationMethod,
  VerificationMethodType,
  DomainVerificationMethod,
} from "./did/did_v1/did_pb.js";

export * from "./did/did_v1/did_pb";