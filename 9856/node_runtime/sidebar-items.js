initSidebarItems({"constant":[["BABE_GENESIS_EPOCH_CONFIG","The BABE epoch configuration at genesis."],["MAX_NOMINATIONS",""],["MINER_MAX_ITERATIONS","Maximum number of iterations for balancing that will be executed in the embedded OCW miner of election provider multi phase."],["VERSION","Runtime version."],["WASM_BINARY",""],["WASM_BINARY_BLOATY",""]],"enum":[["BalancesCall","Contains one variant per dispatchable that can be called by an extrinsic."],["Call",""],["Event",""],["OriginCaller",""],["ProxyType","The type used to represent the kinds of proxying allowed."],["StakerStatus","Indicates the initial status of the staker."],["SystemCall","Contains one variant per dispatchable that can be called by an extrinsic."]],"fn":[["native_version","Native version."],["wasm_binary_unwrap","Wasm binary unwrapped. If built with `SKIP_WASM_BUILD`, the function panics."]],"mod":[["api",""],["constants","Constant values used within the runtime. A set of constant values used in substrate runtime."],["impls","Implementations of some helper traits passed into runtime modules as associated types. Some configurable implementations as associated type for the substrate runtime."]],"struct":[["AdjustmentVariable",""],["AnnouncementDepositBase",""],["AnnouncementDepositFactor",""],["ApprovalDeposit",""],["AssetDeposit",""],["BagThresholds",""],["BasicDeposit",""],["BenchmarkConfig","The numbers configured here could always be more than the the maximum limits of staking pallet to ensure election snapshot will not run out of memory. For now, we set them to smaller values since the staking is bounded and the weight pipeline takes hours for this single pallet."],["BlockHashCount",""],["BondingDuration",""],["BountyCuratorDeposit",""],["BountyDepositBase",""],["BountyDepositPayoutDelay",""],["BountyUpdatePeriod",""],["BountyValueMinimum",""],["Burn",""],["CandidacyBond",""],["CandidateDeposit",""],["ChallengePeriod",""],["ClassDeposit",""],["ConfigDepositBase",""],["ContractDeposit",""],["CooloffPeriod",""],["CouncilMaxMembers",""],["CouncilMaxProposals",""],["CouncilMotionDuration",""],["CurrencyAdapter","Implements the transaction payment for a pallet implementing the `Currency` trait (eg. the pallet_balances) using an unbalance handler (implementing `OnUnbalanced`)."],["DataDepositPerByte",""],["DealWithFees",""],["DeletionQueueDepth",""],["DeletionWeightLimit",""],["DepositBase",""],["DepositFactor",""],["DesiredMembers",""],["DesiredRunnersUp",""],["DisabledValidatorsThreshold",""],["ElectionsPhragmenPalletId",""],["EnactmentPeriod",""],["EpochDuration",""],["ExistentialDeposit",""],["ExpectedBlockTime",""],["FastTrackVotingPeriod",""],["FieldDeposit",""],["FifoQueueLen",""],["FriendDepositFactor",""],["GenesisConfig",""],["IgnoredIssuance",""],["ImOnlineUnsignedPriority",""],["IndexDeposit",""],["InstanceDeposit",""],["InstantAllowed",""],["IntakePeriod",""],["KeyLimit",""],["LaunchPeriod",""],["LotteryPalletId",""],["MaxAdditionalFields",""],["MaxApprovals",""],["MaxAuthorities",""],["MaxCalls",""],["MaxCandidateIntake",""],["MaxFriends",""],["MaxGenerateRandom",""],["MaxIntakeBids",""],["MaxKeys",""],["MaxLockDuration",""],["MaxLocks",""],["MaxNominatorRewardedPerValidator",""],["MaxPeerDataEncodingSize",""],["MaxPeerInHeartbeats",""],["MaxPending",""],["MaxProposals",""],["MaxProxies",""],["MaxQueueLen",""],["MaxRegistrars",""],["MaxReserves",""],["MaxScheduledPerBlock",""],["MaxSignatories",""],["MaxStrikes",""],["MaxSubAccounts",""],["MaxValueSize",""],["MaxVotes",""],["MaximumReasonLength",""],["MaximumSchedulerWeight",""],["MetadataDepositBase",""],["MetadataDepositPerByte",""],["MinFreeze",""],["MinVestedTransfer",""],["MinerMaxLength",""],["MinerMaxWeight",""],["MinimumDeposit",""],["MinimumMultiplier",""],["MinimumPeriod",""],["MultiPhaseUnsignedPriority",""],["NposSolution16",""],["OffchainRandomBalancing","A source of random balance for NposSolver, which is meant to be run by the OCW election miner."],["OffchainRepeat",""],["Origin",""],["PalletInfo","Provides an implementation of `PalletInfo` to provide information about the pallet setup in the runtime."],["Period",""],["PeriodSpend",""],["PreimageByteDeposit",""],["ProposalBond",""],["ProposalBondMinimum",""],["ProxyDepositBase",""],["ProxyDepositFactor",""],["QueueCount",""],["RecoveryDeposit",""],["ReportLongevity",""],["RewardCurve",""],["RotationPeriod",""],["Runtime",""],["RuntimeApi",""],["RuntimeApiImpl","Implements all runtime apis for the client side."],["RuntimeBlockLength",""],["RuntimeBlockWeights",""],["SS58Prefix",""],["Schedule",""],["SessionKeys",""],["SessionsPerEra",""],["SignedDepositBase",""],["SignedDepositByte",""],["SignedMaxSubmissions",""],["SignedPhase",""],["SignedRewardBase",""],["SlashDeferDuration",""],["SocietyPalletId",""],["SolutionImprovementThreshold",""],["SpendPeriod",""],["StakingUnsignedPriority","We prioritize im-online heartbeats over election solution submission."],["StringLimit",""],["SubAccountDeposit",""],["TargetBlockFullness",""],["TargetedFeeAdjustment","A struct to update the weight multiplier per block. It implements `Convert<Multiplier, Multiplier>`, meaning that it can convert the previous multiplier to the next one. This should be called on `on_finalize` of a block, prior to potentially cleaning the weight data from the system pallet."],["TechnicalMaxMembers",""],["TechnicalMaxProposals",""],["TechnicalMotionDuration",""],["TermDuration",""],["TipCountdown",""],["TipFindersFee",""],["TipReportDepositBase",""],["TransactionByteFee",""],["TreasuryPalletId",""],["UncleGenerations",""],["UnsignedPhase",""],["ValueLimit",""],["Version",""],["VoterSnapshotPerBlock",""],["VotingBondBase",""],["VotingBondFactor",""],["VotingPeriod",""],["WrongSideDeduction",""]],"trait":[["BuildStorage","Complex storage builder stuff."]],"type":[["AccountId","Some way of identifying an account on the chain. We intentionally make it equivalent to the public key of our transaction signing scheme."],["Address","The address format for describing accounts."],["AllModules","All modules included in the runtime as a nested tuple of types. Excludes the System pallet."],["AllModulesWithSystem","All modules included in the runtime as a nested tuple of types."],["AllPallets","All pallets included in the runtime as a nested tuple of types. Excludes the System pallet."],["AllPalletsWithSystem","All pallets included in the runtime as a nested tuple of types."],["Assets",""],["AuthorityDiscovery",""],["AuthorityDiscoveryConfig",""],["Authorship",""],["Babe",""],["BabeConfig",""],["BagsList",""],["Balances",""],["BalancesConfig",""],["Block","Block type as expected by this runtime."],["BlockId","BlockId type as expected by this runtime."],["Bounties",""],["CheckedExtrinsic","Extrinsic type that has already been checked."],["Contracts",""],["Council",""],["CouncilConfig",""],["Democracy",""],["DemocracyConfig",""],["ElectionProviderMultiPhase",""],["Elections",""],["ElectionsConfig",""],["Executive","Executive: handles dispatch to the various modules."],["Gilt",""],["GiltConfig",""],["Grandpa",""],["GrandpaConfig",""],["Header","Block header type as expected by this runtime."],["Historical",""],["Identity",""],["ImOnline",""],["ImOnlineConfig",""],["Indices",""],["IndicesConfig",""],["Lottery",""],["Mmr",""],["Multiplier","Fee multiplier."],["Multisig",""],["Offences",""],["Proxy",""],["RandomnessCollectiveFlip",""],["Recovery",""],["Scheduler",""],["Session",""],["SessionConfig",""],["Signature","Alias to 512-bit hash when used in the context of a transaction signature on the chain."],["SignedBlock","A Block signed with a Justification"],["SignedExtra","The SignedExtension to the basic transaction logic."],["SignedPayload","The payload being signed in transactions."],["Society",""],["SocietyConfig",""],["Staking",""],["StakingConfig",""],["Sudo",""],["SudoConfig",""],["System",""],["SystemConfig",""],["TechnicalCommittee",""],["TechnicalCommitteeConfig",""],["TechnicalMembership",""],["TechnicalMembershipConfig",""],["Timestamp",""],["Tips",""],["TransactionPayment",""],["TransactionStorage",""],["TransactionStorageConfig",""],["Treasury",""],["TreasuryConfig",""],["UncheckedExtrinsic","Unchecked extrinsic type as expected by this runtime."],["Uniques",""],["Utility",""],["Vesting",""],["VestingConfig",""]]});