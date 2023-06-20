import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerInputInformation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<InputInformation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly scope?: string | null;
  readonly attribute?: string | null;
  readonly marketplace?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyInputInformation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<InputInformation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly scope?: string | null;
  readonly attribute?: string | null;
  readonly marketplace?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type InputInformation = LazyLoading extends LazyLoadingDisabled ? EagerInputInformation : LazyInputInformation

export declare const InputInformation: (new (init: ModelInit<InputInformation>) => InputInformation) & {
  copyOf(source: InputInformation, mutator: (draft: MutableModel<InputInformation>) => MutableModel<InputInformation> | void): InputInformation;
}